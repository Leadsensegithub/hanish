import React, { useEffect, useState } from "react";
import SkipButton from "../com/SkipButton";
import Button from "../com/Button";
import { useNavigate } from "react-router-dom";
import Loader from "../com/Loader";

const PersonalSurvey = () => {
  const [loader, setLoader] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    if (loader) {
      setTimeout(() => {
        nav("/employmentsurvey");
      }, 2000);
    }
  }, [loader, nav]);

  const [data, setData] = useState({
    fatherOccupation: "",
    motherOccupation: "",
    sibling: "",
    city: "",
    state: "",
    country: "",
    relocate: ""
  });

  const [errors, setErrors] = useState({
    fatherOccupation: "",
    motherOccupation: "",
    sibling: "",
    city: "",
    state: "",
    country: "",
    relocate: ""
  });
  function handleButtonSkip() {
    setLoader(true);
  }
  const handleButton = () => {
    const newErrors = {};
    Object.keys(data).forEach((field) => {
      if (!data[field]) {
        newErrors[field] = `Please enter ${field.replace(/([A-Z])/g, " $1").toLowerCase()}`;
      }
    });
    setErrors(newErrors);

    if (Object.values(newErrors).length === 0) {
      setLoader(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));

    if (value) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: `Please enter ${name.replace(/([A-Z])/g, " $1").toLowerCase()}`
      }));
    }
  };

  return (
    <div className="container">
      {loader && <Loader />}
      <div>
        <div>
          <h3>Personal Survey</h3>
        </div>
        <div>
          <div className="d-flex">
            <label>Father's Occupation</label>
          </div>
          <div className="d-flex justify-content-start">
            <input
              onChange={handleChange}
              type="text"
              name="fatherOccupation"
              className="d-flex form-control w-50"
            />
          </div>
          <div className="d-flex justify-content-start">
            <small className="text-danger">{errors.fatherOccupation}</small>
          </div>
        </div>

        <div>
          <div className="d-flex mt-2">
            <label>Mother's Occupation</label>
          </div>
          <div className="d-flex justify-content-start">
            <input
              onChange={handleChange}
              type="text"
              name="motherOccupation"
              className="d-flex form-control w-50"
            />
          </div>
          <div className="d-flex justify-content-start">
            <small className="text-danger">{errors.motherOccupation}</small>
          </div>
        </div>

        <div>
          <div className="d-flex">
            <label>Do you have siblings?</label>
          </div>
          <div className="d-flex justify-content-start">
            <input
              onChange={handleChange}
              name="sibling"
              type="radio"
              value="Yes"
              className="d-flex"
            />
            <label className="ml-1">Yes</label>
            <input
              onChange={handleChange}
              name="sibling"
              type="radio"
              value="No"
              className="ml-2"
            />
            <label className="ml-1">No</label>
          </div>
          <div className="d-flex justify-content-start">
            <small className="text-danger">{errors.sibling}</small>
          </div>
        </div>

        <div>
          <div className="d-flex mt-2">
            <label>Current City</label>
          </div>
          <div className="d-flex justify-content-start">
            <input
              onChange={handleChange}
              name="city"
              type="text"
              className="d-flex form-control w-50"
            />
          </div>
          <div className="d-flex justify-content-start">
            <small className="text-danger">{errors.city}</small>
          </div>
        </div>

        <div>
          <div className="d-flex mt-2">
            <label>State</label>
          </div>
          <div className="d-flex justify-content-start">
            <input
              onChange={handleChange}
              name="state"
              type="text"
              className="d-flex form-control w-50"
            />
          </div>
          <div className="d-flex justify-content-start">
            <small className="text-danger">{errors.state}</small>
          </div>
        </div>

        <div>
          <div className="d-flex mt-2">
            <label>Country</label>
          </div>
          <div className="d-flex justify-content-start">
            <input
              onChange={handleChange}
              name="country"
              type="text"
              className="d-flex form-control w-50"
            />
          </div>
          <div className="d-flex justify-content-start">
            <small className="text-danger">{errors.country}</small>
          </div>
        </div>

        <div>
          <div className="d-flex mt-2">
            <label>Ready to Relocate</label>
          </div>
          <div className="d-flex justify-content-start align-items-center">
            <input
              onChange={handleChange}
              name="relocate"
              type="radio"
              value="Yes"
              checked={data.relocate === "Yes"}
              className="mr-1"
            />
            <label className="mr-3">Yes</label>
            <input
              onChange={handleChange}
              name="relocate"
              type="radio"
              value="No"
              checked={data.relocate === "No"}
              className="mr-1"
            />
            <label>No</label>
          </div>
          <div className="d-flex justify-content-start">
            <small className="text-danger">{errors.relocate}</small>
          </div>
        </div>

        <div className="d-flex justify-content-end mt-4">
          <SkipButton onClick={handleButtonSkip}>Skip</SkipButton>
          <Button onClick={handleButton}>Next</Button>
        </div>
      </div>
    </div>
  );
};

export default PersonalSurvey;