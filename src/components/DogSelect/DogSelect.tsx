import { SelectOption } from '@/interfaces/common/SelectOption'
import { FC } from 'react'
import Select from 'react-select'

interface DogSelectProps {
    options: SelectOption[]
    value: string
    onChange: (value:string) => void
}

const DogSelect: FC<DogSelectProps> = ({ onChange, value, options }) => (
    <Select
        options={options}
        isClearable
        defaultInputValue={value}
        className="mr-2 rounded-md focus:outline-none text-black w-80"
        onChange={(newValue,_) => {
            onChange(newValue?.label || "")
        }}
        onInputChange={(newValue, action) => {
            if(action.action === "input-change"){
                onChange(newValue)
            }
        }}
    />
)

export default DogSelect