import Link from 'next/link'

interface PageHeaderProps {
  title: string
  breadcrumbs?: { label: string; href?: string }[]
  backgroundImage?: string
}

export default function PageHeader({ title, breadcrumbs = [], backgroundImage = '/fotos-zaak/WhatsApp Image 2025-10-29 at 12.27.22.jpeg' }: PageHeaderProps) {
  return (
    <div className="container-fluid page-header mb-3 p-0" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="container-fluid page-header-inner py-3">
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
