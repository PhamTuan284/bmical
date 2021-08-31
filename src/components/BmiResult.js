import { FaArrowDown, FaArrowLeft } from "react-icons/fa";

export default function BmiResult({ handleCaculated, bmi, position }) {
  return (
    <div className="body">
      <div
        className="back mb-3 d-flex align-items-center"
        onClick={() => handleCaculated(false)}
      >
        <FaArrowLeft />
        <div className="ms-1">Back</div>
      </div>
      <h1 className="result">{bmi.current}</h1>
      <div className="scale">
        <div
          className="arrow animate__animated animate__slideInLeft"
          style={{ left: `${position.current}%` }}
        >
          <FaArrowDown />
        </div>
        <img
          src="https://assets.nhs.uk/tools/bmi/images/slider_adult_1.png"
          alt=""
        />
        <div className="scale-numbers">
          <div style={{ left: "16%" }}>
            <div>18.5</div>
          </div>
          <div style={{ left: "60%" }}>
            <div>25</div>
          </div>
          <div style={{ left: "93%" }}>
            <div>30</div>
          </div>
        </div>
      </div>
      <h4 className="result-text1 mb-4">
        Your result suggests you are{" "}
        <strong>
          {bmi.current < 18.5
            ? "underweight"
            : bmi.current <= 25 && bmi.current >= 18.5
            ? "a healthy weight"
            : bmi.current > 25
            ? "obese"
            : ""}
        </strong>
      </h4>
      <div className="alert">
        {bmi.current < 18.5
          ? "If you are receiving treatment for an eating disorder then this tool is NOT to be used. There may be an underlying medical cause for your weight, or your diet may not be providing you with enough calories. We suggest you discuss this with your GP."
          : bmi.current <= 25 && bmi.current >= 18.5
          ? "We suggest you maintain your weight. We've got lots of workouts and activity ideas to help you stay active."
          : bmi.current > 25
          ? "Losing and keeping off 5% of your weight can have health benefits, such as lowering your blood pressure and reducing your risk of developing type 2 diabetes."
          : ""}
      </div>

      <div className="accordion accordion-flush" id="accordionFlush">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              What is BMI?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlush"
          >
            <div className="accordion-body">
              <p>
                BMI uses your height and weight to work out if you're a healthy
                weight, underweight or overweight. Your BMI result is not the
                perfect measure of your overall health. It can't tell if you're
                carrying too much fat or you've got a lot of muscle. You could
                use your BMI result as a starting point for further discussion
                with your GP. The adult BMI doesn't take into account age, sex
                or musclar build. This means that:
              </p>
              <ul>
                <li>
                  Older adults can have a healthy BMI but still have too much
                  fat. This is because older adults tend to have more body fat
                  than younger adults.
                </li>
                <li>
                  Women can have a healthy BMI but still have too much fat. This
                  is because women tend to have more body fat than men with the
                  same BMI.
                </li>
                <li>
                  If you're from a black and ethnic minority group, you're at
                  increased risk of type 2 diabetes with a BMI of 23 or more.
                </li>
                <li>
                  An athletic adult with a lot of muscle may have a high BMI but
                  not be overweight. This is because BMI can’t tell the
                  difference between fat and muscle.
                </li>
              </ul>
              <p>
                If you are pregnant, you should use your pre-pregnancy weight to
                work out your BMI. Using your pregnancy weight may not be
                accurate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
