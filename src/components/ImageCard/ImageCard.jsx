export default function ImageCard({ data: { urls, slug } }) {
  return (
    <div>
      <img src={urls.small} alt={slug} />
    </div>
  );
}
