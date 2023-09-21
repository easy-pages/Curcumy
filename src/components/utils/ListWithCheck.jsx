import { CheckCircle } from "@phosphor-icons/react"

// eslint-disable-next-line react/prop-types
const ListWithCheck = ({ list }) => {
    return (
        <div className="w-full sm:w-auto flex flex-col items-start gap-4 mt-8">
            {
                // eslint-disable-next-line react/prop-types
                list.map(item =>
                    <li key={item} className="w-full flex justify-start items-center gap-2 text-lg font-medium ">
                        <div className="flex justify-start items-center">
                            <CheckCircle className="fill-[#00a817]" size={28} />
                        </div>
                        <p>{item}</p>
                    </li>
                )
            }
        </div>
    )
}

export default ListWithCheck