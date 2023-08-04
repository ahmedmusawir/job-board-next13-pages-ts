import React from 'react';
import SwitchButton from '../ui-ux/SwitchButton';
import CheckboxGroupJobTypes from '../ui-ux/CheckboxGroupJobTypes';
import CheckboxGroup from '../ui-ux/CheckboxGroup';

const SidebarForm = () => {
  return (
    <div>
      <div className="text-lg font-semibold leading-6 text-gray-400 pb-5">
        Filter Jobs
      </div>
      <SwitchButton labelText="Remote Only" filter="remoteOk" />
      <SwitchButton labelText="Featured Only" filter="featured" />
      <div className="text-lg font-semibold leading-6 text-gray-400 py-5">
        Job Types
      </div>
      <CheckboxGroupJobTypes />
    </div>
  );
};

export default SidebarForm;
