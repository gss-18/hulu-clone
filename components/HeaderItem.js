function HeaderItem({Icon, title}) {
    return (
        <div className="pl-6 flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white ">
        <Icon className="h-8 mb-1 group-hover:animate-bounce" />
            <p className="opacity-0 group-hover:opacity-100 tracking-wide">{title}</p>
        </div>
    )
}

export default HeaderItem


