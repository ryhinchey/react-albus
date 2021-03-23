import React, { memo, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { OnInitContext } from "./Wizard";
import useWizard from "../hooks/useWizard";

const Steps = ({ step, children: childSteps }) => {
  const { step: wizardStep } = useWizard();
  const setSteps = useContext(OnInitContext);

  useEffect(() => {
    const steps = React.Children.map(childSteps, child => {
      const {
        props: { children, ...config }
      } = child;
      return config;
    });

    setSteps(steps);
  }, []);

  const { id: activeId } = step || wizardStep;
  const [child = null] = React.Children.toArray(childSteps).filter(
    ({ props: { id } }) => id === activeId
  );

  return child;
};

Steps.propTypes = {
  children: PropTypes.node.isRequired,
  step: PropTypes.shape({
    id: PropTypes.string.isRequired
  })
};

Steps.defaultProps = {
  step: null
};

export default memo(Steps);
