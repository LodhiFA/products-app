ProductImage Component example:

```tsx inside Markdown
import { testProducts } from '../../tests/testData'
import '../../assets/styles/bootstrap.min.css'
import styles from '../Product/Product.module.css'
;<div className={styles.productCard}>
  <ProductImage src={testProducts[0].image_link} className='card-img-top' alt={testProducts[0].title} />
</div>
```
