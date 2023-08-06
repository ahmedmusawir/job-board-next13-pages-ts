import { useState } from 'react';

interface Bounds {
  [key: string]: number;
}

const CheckboxGroup = () => {
  interface SidebarFormState {
    baseSalaryOptions: string[];
    baseSalaryBounds: number[];
    selectedTags: string[];
  }

  // ALL STATES FROM SIDEBAR
  const [sideBarFormState, setSideBarFormState] = useState<SidebarFormState>({
    baseSalaryOptions: [],
    baseSalaryBounds: [],
    selectedTags: [],
  });

  const baseSalaryRangesOptions = [
    { value: '<20K', display: '< $20K', bounds: { min: 0, max: 20000 } },
    {
      value: '20K-50K',
      display: '$20K - $50K',
      bounds: { min: 20001, max: 50000 },
    },
    {
      value: '50K-100K',
      display: '$50K - $100K',
      bounds: { min: 50001, max: 100000 },
    },
    {
      value: '> 100K',
      display: '> $100K',
      bounds: { min: 100001, max: 1000000 },
    },
  ];

  const handleBaseSalaryRangesSelect = (
    e: React.ChangeEvent<HTMLInputElement>,
    option: string,
    bounds: Bounds
  ) => {
    if (e.target.checked) {
      setSideBarFormState((prevState) => {
        const baseSalaryOptions = [...prevState.baseSalaryOptions];
        // console.log('baseSalaryOPtions:', baseSalaryOptions);
        baseSalaryOptions.push(option);
        const newFormState = {
          ...prevState,
          baseSalaryOptions,
        };
        console.log('New Form State:', newFormState);
        return newFormState;
      });
    } else {
      setSideBarFormState((prevState) => {
        const newFormState = {
          ...prevState,
          baseSalaryOptions: prevState.baseSalaryOptions.filter(
            (baseSalaryOption) => option != baseSalaryOption
          ),
        };
        console.log(newFormState);
        return newFormState;
      });
    }
    // if (e.target.checked) {
    //   setSideBarFormState((prevState) => {
    //     const baseSalaryOptions = [...prevState.baseSalaryOptions];
    //     baseSalaryOptions.push(option);
    //     const baseSalaryBounds = [...prevState.baseSalaryBounds];
    //     baseSalaryBounds.push(bounds.min);
    //     baseSalaryBounds.push(bounds.max);
    //     const newFormState = {
    //       ...prevState,
    //       baseSalaryOptions,
    //       baseSalaryBounds,
    //     };
    //     // console.log(newFormState);
    //     return newFormState;
    //   });
    // } else {
    //   setSideBarFormState((prevState) => {
    //     const newFormState = {
    //       ...prevState,
    //       baseSalaryOptions: prevState.baseSalaryOptions.filter(
    //         (baseSalaryOption) => option != baseSalaryOption
    //       ),
    //       baseSalaryBounds: prevState.baseSalaryBounds.filter(
    //         (bound) => ![bounds.min, bounds.max].includes(bound)
    //       ),
    //     };
    //     // console.log(newFormState);
    //     return newFormState;
    //   });
    // }
  };

  return (
    <fieldset>
      <legend className="sr-only">Filter by Job Types</legend>
      <div className="space-y-3">
        {baseSalaryRangesOptions.map((option) => (
          <div key={option.value} className="relative flex items-start">
            <div className="flex h-6 items-center">
              <input
                id="jobtype-checkbox"
                aria-describedby="jobtype-checkbox-description"
                name="jobtype-checkbox"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                onChange={(e) =>
                  handleBaseSalaryRangesSelect(e, option.value, option.bounds)
                }
                // checked={sideBarFormState.baseSalaryOptions.includes(
                //   option.value
                // )}
              />
            </div>
            <div className="ml-3 text-sm leading-6">
              <label
                htmlFor="jobtype-checkbox"
                className="font-medium text-gray-900"
              >
                {option.display}
              </label>
              <h6>
                BOOLEAN FOR BASE SALARY OPTIONS:
                <span className="text-pink-600 font-bold">
                  {sideBarFormState.baseSalaryOptions.includes(option.value)
                    ? 'true'
                    : 'false'}
                </span>
              </h6>
              <h6>
                OPTION.VALUE:
                <span className="text-orange-600 font-bold">
                  {sideBarFormState.baseSalaryOptions}
                </span>
              </h6>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default CheckboxGroup;
