const CheckboxGroupJobTypes = () => {
  const jobTypesOptions = [
    { value: 'full-time', display: 'Full Time' },
    { value: 'part-time', display: 'Part Time' },
    { value: 'internship', display: 'Internship' },
    { value: 'contract', display: 'Contract' },
  ];

  return (
    <fieldset>
      <legend className="sr-only">Filter by Job Types</legend>
      <div className="space-y-3">
        {jobTypesOptions.map((option) => (
          <div key={option.value} className="relative flex items-start">
            <div className="flex h-6 items-center">
              <input
                id="comments"
                aria-describedby="comments-description"
                name="comments"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div className="ml-3 text-sm leading-6">
              <label htmlFor="comments" className="font-medium text-gray-900">
                {option.display}
              </label>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default CheckboxGroupJobTypes;
