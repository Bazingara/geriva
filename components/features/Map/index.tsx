export interface MapProps {
  className?: string
}

export const Map = ({ className }: MapProps) => {
  return (
    <div className={className}>
      <iframe
        allowFullScreen
        className="aspect-[4/1] w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyApLNAzxXAPTXPlWc2eDmi3u2KOP1pZFec
    &q=Pousada+Gerivá"
        title="Mapa do Gerivá Park Hotel"
      />
    </div>
  )
}
