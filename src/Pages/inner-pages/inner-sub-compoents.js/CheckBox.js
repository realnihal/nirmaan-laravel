import React, { useEffect, useState } from "react";

import "./checkbox.css";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

import hcLine from "../../../images/hLine.png";

function CheckBox({
  years,
  months,
  sectors,
  selectedYears,
  setSelectedYears,
  selectedMonths,
  setSelectedMonths,
  selectedSectors,
  setSelectedSectors,
}) {
  const handleCheckboxChange = (event, category) => {
    const value = event.target.value;
    console.log("value", value);

    switch (category) {
      case "years":
        if (event.target.checked) {
          setSelectedYears([...selectedYears, value]);
        } else {
          setSelectedYears(selectedYears.filter((year) => year !== value));
        }

        break;

      case "months":
        if (event.target.checked) {
          setSelectedMonths([...selectedMonths, value]);
        } else {
          setSelectedMonths(selectedMonths.filter((month) => month !== value));
        }
        break;

      case "sectors":
        if (event.target.checked) {
          setSelectedSectors([...selectedSectors, value]);
        } else {
          setSelectedSectors(
            selectedSectors.filter((sector) => sector !== value)
          );
        }
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    console.log("year", selectedYears);
  }, [selectedYears]);

  useEffect(() => {
    console.log("months", selectedMonths);
  }, [selectedMonths]);

  useEffect(() => {
    console.log("sector", selectedSectors);
  }, [selectedSectors]);

  const handleReset = () => {
    setSelectedYears([]);
    setSelectedMonths([]);
    setSelectedSectors([]);
  };

  return (
    <div className="checkbox-outer-div">
      <div className="checkbox-inner-div">
        <div className="checbox-heading-wrapper">
          <div className="filter-by">Filter by</div>
          <div className="reset" onClick={handleReset}>
            Reset
          </div>
        </div>
        <img src={hcLine} className="checkbox-hLine" />
        <div className="checkbox-form">
          <Form>
            <Form.Group>
              <Form.Label className="common-heading-style year-margin">
                Incubation Year
              </Form.Label>
              <div className="common-form-gap">
                {years.map((yearObj) => (
                  <Form.Check
                    key={yearObj.id}
                    type="checkbox"
                    label={yearObj.year}
                    id={yearObj.id}
                    value={yearObj.year}
                    checked={selectedYears.includes(yearObj.year)}
                    onChange={(e) => handleCheckboxChange(e, "years")}
                    className="custom-label-font-size"
                  />
                ))}
              </div>
            </Form.Group>

            <Form.Group>
              <Form.Label className="common-heading-style">
                Cohort Months
              </Form.Label>
              <div className="common-form-gap">
                {months.map((monthObj) => (
                  <Form.Check
                    key={monthObj.id}
                    type="checkbox"
                    label={monthObj.month}
                    id={monthObj.id}
                    value={monthObj.month}
                    checked={selectedMonths.includes(monthObj.month)}
                    onChange={(e) => handleCheckboxChange(e, "months")}
                    className="custom-label-font-size"
                  />
                ))}
              </div>
            </Form.Group>

            <Form.Group>
              <Form.Label className="common-heading-style">Sector</Form.Label>
              <div>
                {sectors.map((sectorObj) => (
                  <Form.Check
                    key={sectorObj.id}
                    type="checkbox"
                    label={sectorObj.sector}
                    id={sectorObj.id}
                    value={sectorObj.sector}
                    checked={selectedSectors.includes(sectorObj.sector)}
                    onChange={(e) => handleCheckboxChange(e, "sectors")}
                    className="custom-label-font-size"
                  />
                ))}
              </div>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default CheckBox;
