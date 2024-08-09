import { TIER_TYPE } from "../../lib/constants/tier";
import { lazy } from "react";

import UsersIcon from "../../assets/svgs/users.svg"
import DollarIcon from "../../assets/svgs/dollar.svg"
import DoorIcon from "../../assets/svgs/door.svg"

const Chart = lazy(() => import("react-apexcharts"));

export default function AnalyticSection({ tier }: { tier: TIER_TYPE }) {
  const options = {
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    chart: {
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
  };

  const salesSeries = [
    {
      name: "sales",
      data: [500, 234, 744, 845, 122, 79, 90]
    }
  ];

  const profitSeries = [
    {
      name: "sales",
      data: [893, 10, 634, 645, 122, 900, 200]
    },
    {
      name: "net margin",
      data: [400, 534, 867, 123, 666, 234, 444]
    }
  ];

  function simplePrediction(data: Array<number>, periodsToPredict: number) {
    const changes = data.slice(1).map((value, index) => value - data[index]);
    const totalChange = changes.reduce((a, b) => a + b, 0);
    const avgChange = totalChange / changes.length;

    return data[data.length - 1] + avgChange * periodsToPredict;
  }

  function sumPrediction(arr: Array<Array<number>>, period: number) {
    let sum = 0

    for (let index = 0; index < arr.length; index++) {
      sum += simplePrediction(arr[index], period)
    }

    return Math.round(sum)
  }

  return (
    <>
      <div className="analytic__summary">
        <div className="analytic__box">
          <div className="analytic__icon">
            <UsersIcon />
          </div>
          <div className="analytic__detail">
            <h4 className="analytic__name">Monthly Followers</h4>
            <div className="analytic__counter">
              40.256
            </div>
          </div>
        </div>
        <div className="analytic__box">
          <div className="analytic__icon">
            <DollarIcon />
          </div>
          <div className="analytic__detail">
            <h4 className="analytic__name">Monthly Profits</h4>
            <div className="analytic__counter">
              $892.77,2
            </div>
          </div>
        </div>
        <div className="analytic__box">
          <div className="analytic__icon">
            <DoorIcon />
          </div>
          <div className="analytic__detail">
            <h4 className="analytic__name">Monthly Visitor</h4>
            <div className="analytic__counter">
              11.528
            </div>
          </div>
        </div>
      </div>

      {tier.benefits.can_use_ai_prediction && (
        <h2 className="profit__prediction">
          Revenue Projection: ${sumPrediction(profitSeries.map(profit => profit.data), 4)}
        </h2>
      )}

      {tier.benefits.can_analyze_sales_with_charts && (
        <div className="analytic__charts">
          <div className="chart__box">
            <Chart
              width="100%"
              options={{
                ...options,
                title: {
                  text: 'Sales',
                },
              }}
              series={salesSeries}
              type="bar"
            />;
          </div>

          <div className="chart__box">
            <Chart
              width="100%"
              options={{
                ...options,
                colors: ["#cc3cfb"],
                title: {
                  text: 'Profits',
                },
                stroke: {
                  curve: "smooth",
                  width: 2
                }
              }}
              series={profitSeries}
              type="line"
            />;
          </div>
        </div>
      )}
    </>
  )
}
