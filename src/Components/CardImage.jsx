export default function CardImage({ src, alt }) {
    return (
        <div className="img-container">
          <img
            className="card-img-top"
            src={src}
            alt={alt}
            onError={(event) => event.target.style.left = '-15px'}
          />
        </div>
    )
}