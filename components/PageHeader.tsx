import Link from 'next/link'

interface PageHeaderProps {
  title: string
  breadcrumbs?: { label: string; href?: string }[]
}

export default function PageHeader({ title, breadcrumbs = [] }: PageHeaderProps) {
  return (
    <div className="container-fluid page-header mb-5 p-0" style={{backgroundImage: 'url(/img/carousel-bg-1.jpg)'}}>
      <div className="container-fluid page-header-inner py-5">
        <div className="container text-center">
          <h1 className="display-3 text-white mb-3 animated slideInDown">{title}</h1>
          {breadcrumbs.length > 0 && (
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                {breadcrumbs.map((crumb, index) => (
                  <li
                    key={index}
                    className={`breadcrumb-item ${index === breadcrumbs.length - 1 ? 'text-white active' : ''}`}
                    {...(index === breadcrumbs.length - 1 ? { 'aria-current': 'page' } : {})}
                  >
                    {crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : crumb.label}
                  </li>
                ))}
              </ol>
            </nav>
          )}
        </div>
      </div>
    </div>
  )
}
