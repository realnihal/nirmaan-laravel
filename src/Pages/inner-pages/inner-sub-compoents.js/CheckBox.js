import React from "react";

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
  const handleCheckboxClick = (e, category, value) => {
    console.log("value", value);

    switch (category) {
      case "years":
        if (selectedYears.includes(value) ) {
          console.log("if");
          setSelectedYears(selectedYears.filter((year) => year !== value));
        } else {
          console.log("else if");
          if (selectedYears.length == 0) {
            selectedYears = value;
          }
          setSelectedYears([...selectedYears, value]);
          console.log("years after", selectedYears);
        }
        break;

      case "months":
        if (selectedMonths.includes(value)) {
          setSelectedMonths(selectedMonths.filter((month) => month !== value));
        } else {
          setSelectedMonths([...selectedMonths, value]);
        }
        break;

      case "sectors":
        if (selectedSectors.includes(value)) {
          setSelectedSectors(
            selectedSectors.filter((sector) => sector !== value)
          );
        } else {
          setSelectedSectors([...selectedSectors, value]);
        }
        break;

      default:
        break;
    }

    console.log("ans", selectedYears);
  };
  return (
    <div className="checkbox-outer-div">
      <div className="checkbox-inner-div">
        <div className="checbox-heading-wrapper">
          <div className="filter-by">Filter by</div>
          <div className="reset">Reset</div>
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
                    onClick={(e) =>
                      handleCheckboxClick(e, "years", yearObj.year)
                    }
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
                    onClick={(e) =>
                      handleCheckboxClick(e, "months", monthObj.month)
                    }
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
                    onClick={(e) =>
                      handleCheckboxClick(e, "sectors", sectorObj.sector)
                    }
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
