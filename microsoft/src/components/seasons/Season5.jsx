const Season5 = () => {
  const days = ["Wednesday", "Thursday", "Tuesday"];
  const dates = ["28/08", "29/08", "03/09", "04/09", "05/09", "10/09", "11/09"];
   return (
    <div className="flex justify-center gap-5 mt-7">
        {dates.map((date, index)=>(
            <div key={index} className="flex justify-center flex-col items-center text-xs">
                <p className="text-gray-500">
                    {days[index % days.length]}
                </p>
                <p className="font-semibold">{date}</p>
            </div>
        ))}
    </div>
  );
};

export default Season5;
