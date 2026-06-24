import { PieChart, Pie, Cell } from "recharts";
import './DonutChart.css';

function DonutChart({ percent = 25 }) {
    const data = [
        { name: "Read", value: percent },
        { name: "Remaining", value: 100 - percent },
    ];

    const colors = ["#456481", "#B3C5D6"];

    return (
        <>
            <PieChart width={140} height={140}>
                <Pie
                    data={data}
                    dataKey="value"
                    innerRadius={35}
                    outerRadius={60}
                    startAngle={90}
                    endAngle={-270}
                    stroke="none"
                >
                    {data.map((entry, index) => (
                        <Cell key={entry.name} fill={colors[index]} />
                    ))}
                </Pie>
            </PieChart>
        </>    
    );
}

export default DonutChart;