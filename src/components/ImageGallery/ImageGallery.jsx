import css from './ImageGallery.module.css';

export default function ImageGallery({ items }) {
  return (
    <ul className={css.list}>
      {items.map(item => (
        <li className={css.item} key={item.id}>
          <div>
            <img src={item.urls.small} alt={item.slug} />
          </div>
        </li>
      ))}
    </ul>
  );
}
