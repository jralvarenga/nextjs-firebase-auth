interface Props {
  title: string
}

export function Header({ title }: Props) {
  return (
    <div className="flex items-center justify-between space-y-2">
      <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
      <div className="flex items-center space-x-2">
        {/* <CalendarDateRangePicker />
        <Button>Download</Button> */}
      </div>
    </div>
  )
}
