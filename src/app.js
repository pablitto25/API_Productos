import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
import productsRouter from './routes/products.routes.js'
import categoryRouter from './routes/category.routes.js'
import imageRouter from './routes/image.routes.js'
import authRoutes from './routes/auth.routes.js'
import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
const upload = multer({ storage: storage })
const app = express();
app.set('pkg', pkg)
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req,res) =>{
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})

app.use('/api/products', productsRouter);
app.use('/api/category', categoryRouter);
app.use('/api/auth', authRoutes);
app.use('/api/image', imageRouter);
app.post('/upload', upload.single('file'), (req, res) => {
    res.status(200).send('File uploaded successfully');
  });

export default app;
