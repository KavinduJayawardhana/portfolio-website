import React from 'react'

const HeaderItem = ({name,Icon}) => {
  return (
    <div className="group flex items-center gap-3 text-[15px] font-semibold cursor-pointer">
      <div className="flex items-center gap-2 px-2 py-1 border border-transparent rounded-lg group-hover:border-[#24b8fd] group-hover:bg-gray-500 group-hover:text-white transition-all duration-700 ease-in-out transform group-hover:scale-100">
        <Icon className="text-gray-400 group-hover:text-[#24b8fd]" />
        <h2 className="text-gray-400 group-hover:text-[#24b8fd]">{name}</h2>
      </div>
    </div>
  )
}

export default HeaderItem