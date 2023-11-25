import React ,{ useState, useEffect} from "react";
import  Chart  from "react-apexcharts";
import "../styles/DoughnutChart.css";

function DoughnutChart(props) 
{

    const { transactions } = props;
    const [foodExpenses, setFoodExpenses] = useState(0);
    const [travelExpenses, setTravelExpenses] = useState(0);
    const [shoppingExpenses, setShoppingExpenses] = useState(0);
    const [billsExpenses, setBillsExpenses] = useState(0);
    const [othersExpenses, setOthersExpenses] = useState(0);

    useEffect(() => {
        if (transactions) {
          transactions.forEach((transaction) => {
            if (transaction.transactionType === "Expense") {
              switch (transaction.category) {
                case "Food":
                  setFoodExpenses((prev) => prev + transaction.amount);
                  break;
                case "Travel":
                  setTravelExpenses((prev) => prev + transaction.amount);
                  break;
                case "Shopping":
                  setShoppingExpenses((prev) => prev + transaction.amount);
                  break;
                case "Bills":
                  setBillsExpenses((prev) => prev + transaction.amount);
                  break;
                case "Others":
                  setOthersExpenses((prev) => prev + transaction.amount);
                  break;
                default:
                  break;
              }
            }
          });
        }
      }, [transactions]);
      
    

    return(
        <React.Fragment>
            <div className="chart_container">
                <Chart 
                    type="donut"
                    width={450}
                    height={450}

                    series={[foodExpenses, travelExpenses, shoppingExpenses, billsExpenses, othersExpenses]}

                    options={{
                        labels: ["Food", "Travel", "Shopping", "Bills", "Others"],
                        legend: {
                            position: "bottom",
                            labels: {
                                colors: "#000000"
                            }
                        },

                    }}
                >
                </Chart>
            </div>
        </React.Fragment>
    );
}

export default DoughnutChart;