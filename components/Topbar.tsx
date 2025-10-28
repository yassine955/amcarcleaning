export default function Topbar() {
  return (
    <div className="container-fluid bg-light p-0">
      <div className="row gx-0 d-none d-lg-flex">
        <div className="col-lg-7 px-5 text-start">
          <div className="h-100 d-inline-flex align-items-center py-3 me-4">
            <small className="fa fa-map-marker-alt text-primary me-2"></small>
            <small>Barwoutswaarder 5, 3449 HE Woerden</small>
          </div>
          <div className="h-100 d-inline-flex align-items-center py-3">
            <small className="far fa-clock text-primary me-2"></small>
            <small>Ma - Za : 09:00 - 18:00</small>
          </div>
        </div>
        <div className="col-lg-5 px-5 text-end">
          <div className="h-100 d-inline-flex align-items-center py-3 me-4">
            <small className="fa fa-phone-alt text-primary me-2"></small>
            <small>06 246 804 51</small>
          </div>
          <div className="h-100 d-inline-flex align-items-center">
            <a className="btn btn-sm-square bg-white text-primary me-1" href="#"><i className="fab fa-facebook-f"></i></a>
            <a className="btn btn-sm-square bg-white text-primary me-1" href="#"><i className="fab fa-twitter"></i></a>
            <a className="btn btn-sm-square bg-white text-primary me-1" href="#"><i className="fab fa-linkedin-in"></i></a>
            <a className="btn btn-sm-square bg-white text-primary me-0" href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}
