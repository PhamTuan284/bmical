import "./App.css";
import { useState, useRef } from "react";
import Tabs from "./components/Tabs";
import Input from "./components/Input";
import BmiResult from "./components/BmiResult";

const TABS = {
  standard: "standard",
  metric: "metric",
};

function App() {
  const [feet, setFeet] = useState(0);
  const [classInvalidFeet, setClassInvalidFeet] = useState("");

  const [inch, setInch] = useState(0);

  const [pound, setPound] = useState(0);
  const [classInvalidPound, setClassInvalidPound] = useState("");

  const [cm, setCm] = useState(0);
  const [classInvalidCm, setClassInvalidCm] = useState("");

  const [kg, setKg] = useState(0);
  const [classInvalidKg, setClassInvalidKg] = useState("");

  const [tab, setTab] = useState(TABS.standard);
  const [calculated, setCaculated] = useState(false);

  const [classTabStandard, setClassTabStandard] = useState("btn-primary");
  const [classTabMetric, setClassTabMetric] = useState("btn-secondary");

  let bmi = useRef(0);
  let position = useRef(0);

  function handleTabs(chooseTab) {
    if (chooseTab === TABS.standard) {
      setClassTabStandard("btn-primary");
      setClassTabMetric("btn-secondary");
      setTab(TABS.standard);
    } else {
      setClassTabStandard("btn-secondary");
      setClassTabMetric("btn-primary");
      setTab(TABS.metric);
    }
  }

  function handleCaculated(isCaculated) {
    isCaculated === true ? setCaculated(true) : setCaculated(false);
  }

  function handleChangeFeet(feetInput) {
    if (!isNaN(feetInput) && feetInput > 0) {
      setFeet(feetInput);
      setClassInvalidFeet("");
    }
  }

  function handleChangeInch(inchInput) {
    if (!isNaN(inchInput) && inchInput > 0) {
      setInch(inchInput);
    }
  }

  function handleChangePound(poundInput) {
    if (!isNaN(poundInput) && poundInput > 0) {
      setPound(poundInput);
      setClassInvalidPound("");
    }
  }

  function handleChangeCm(cmInput) {
    if (!isNaN(cmInput) && cmInput > 0) {
      setCm(cmInput);
      setClassInvalidCm("");
    }
  }

  function handleChangeKg(kgInput) {
    if (!isNaN(kgInput) && kgInput > 0) {
      setKg(kgInput);
      setClassInvalidKg("");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (tab === TABS.standard) {
      if (feet > 0) {
        setClassInvalidFeet("");
      } else setClassInvalidFeet("is-invalid");

      if (pound > 0) {
        setClassInvalidPound("");
      } else setClassInvalidPound("is-invalid");

      if (feet > 0 && pound > 0) {
        let height = 12 * parseInt(feet) + parseInt(inch);
        let weight = parseInt(pound);
        bmi.current = ((703 * weight) / height ** 2).toFixed(1);
        handleCaculated(true);
        setFeet(0);
        setInch(0);
        setPound(0);
      }
    } else {
      if (cm > 0) {
        setClassInvalidCm("");
      } else setClassInvalidCm("is-invalid");

      if (kg > 0) {
        setClassInvalidKg("");
      } else setClassInvalidKg("is-invalid");

      if (cm > 0 && kg > 0) {
        let weight = parseInt(kg);
        let height = parseInt(cm) / 100;
        bmi.current = (weight / height ** 2).toFixed(1);
        handleCaculated(true);
        setKg(0);
        setCm(0);
      }
    }

    bmi.current <= 17
      ? (position.current = 0)
      : bmi.current > 17 && bmi.current < 31
      ? (position.current = ((bmi.current - 16) / (31 - 16)) * 100)
      : (position.current = 99);
  }

  if (calculated === false) {
    return (
      <div className="App">
        <div className="bmi container">
          <div className="header">
            <h1>BMI calculator</h1>
          </div>
          <div className="body">
            <Tabs
              classTabStandard={classTabStandard}
              classTabMetric={classTabMetric}
              TABS={TABS}
              handleTabs={handleTabs}
            />

            <form className="row g-3" onSubmit={handleSubmit} id="form">
              <div className="col-12">
                <div className="row">
                  {tab === TABS.standard ? (
                    <Input
                      label="Your Height"
                      measureText="Feet"
                      classInvalid={classInvalidFeet}
                      id="inputHeight"
                      measureState={feet}
                      handleChange={handleChangeFeet}
                      invalidText="height"
                    />
                  ) : (
                    <Input
                      label="Your Height"
                      measureText="Centimets"
                      classInvalid={classInvalidCm}
                      id="inputHeight"
                      measureState={cm}
                      handleChange={handleChangeCm}
                      invalidText="height"
                    />
                  )}

                  {tab === TABS.standard ? (
                    <Input
                      measureText="Inches"
                      id="inputHeight"
                      measureState={inch}
                      handleChange={handleChangeInch}
                    />
                  ) : null}
                </div>

                <hr className="mt-4" />
              </div>

              {tab === TABS.standard ? (
                <Input
                  label="Your Weight"
                  measureText="Pounds"
                  classInvalid={classInvalidPound}
                  id="inputWeight"
                  measureState={pound}
                  handleChange={handleChangePound}
                  invalidText="weight"
                />
              ) : (
                <Input
                  label="Your Weight"
                  measureText="Kilograms"
                  classInvalid={classInvalidKg}
                  id="inputWeight"
                  measureState={kg}
                  handleChange={handleChangeKg}
                  invalidText="weight"
                />
              )}

              <hr className="mt-4" />

              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Calculate
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className="App">
        <div className="bmi container">
          <div className="header">
            <h1>BMI calculator</h1>
          </div>
          <BmiResult
            handleCaculated={handleCaculated}
            bmi={bmi}
            position={position}
          />
        </div>
      </div>
    );
}

export default App;
