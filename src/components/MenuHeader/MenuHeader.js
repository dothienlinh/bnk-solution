const menu = [
  {
    id: 1,
    label: 'About Us',
    children: [
      { id: 1, label: 'Our story' },
      { id: 2, label: 'BnK Japan' }
    ]
  },
  {
    id: 2,
    label: 'Services',
    children: [
      { id: 1, label: 'Intelligent Automation' },
      { id: 2, label: 'Open ERP' },
      { id: 3, label: 'Smart Factory' },
      { id: 4, label: 'Software Services' }
    ]
  },
  {
    id: 3,
    label: 'Industries',
    children: [
      { id: 1, label: 'BFSI (Banking, Finance, Insurance)' },
      { id: 2, label: 'Industrial Manufacturing' },
      { id: 3, label: 'Health & Real Estate' },
      { id: 4, label: 'Retail and Consumer' }
    ]
  },
  {
    id: 4,
    label: 'Our Network',
    children: [
      { id: 1, label: 'Clients' },
      { id: 2, label: 'Partners' }
    ]
  },
  {
    id: 5,
    label: 'Newsroom'
  },
  {
    id: 6,
    label: 'Careers',
    children: [
      { id: 1, label: 'Our Life' },
      { id: 2, label: 'List Job' }
    ]
  },
  {
    id: 7,
    label: 'Contact Us'
  }
]

function MenuHeader() {
  return (
    <>
      <ul className="flex items-center justify-between grow font-centuryGothicBold leading-[25px]">
        {menu.map((item) => (
          <li
            key={item.id}
            className="relative"
            onMouseEnter={(e) => {
              if (item.children) {
                e.currentTarget.childNodes[1].classList.remove('hidden')
              }
            }}
            onMouseLeave={(e) => {
              if (item.children) {
                e.currentTarget.childNodes[1].classList.add('hidden')
              }
            }}
          >
            <a href="/">{item.label}</a>
            {item.children && (
              <ul className="menu-child hidden">
                {item.children.map((value) => (
                  <li key={value.id} className="py-[15px] pl-10">
                    <a href="/" className="leading-8 text-white block">
                      {value.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}
export default MenuHeader
