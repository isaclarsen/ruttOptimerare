export function ScheduleForm(){
    return(
        <div className="flex justify-center">
            <form action="" className="flex flex-col">
                    <input type="date" name="date" id="dateSelect" className="text-[#F9D848]" />
                <select name="schedule" id="schedule" className="text-[#F9D848] bg-[#3e3e3e] m-4 rounded-2xl">
                    <option value="001">Bil 001</option>
                    <option value="002">Bil 002</option>
                    <option value="003">Bil 003</option>
                    <option value="004">Bil 004</option>
                </select>
            </form>
        </div>
    )
}