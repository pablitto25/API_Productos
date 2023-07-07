import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
import productsRouter from './routes/products.routes.js'
import categoryRouter from './routes/category.routes.js'
import imageRouter from './routes/image.routes.js'
import authRoutes from './routes/auth.routes.js'
import multer from 'multer';
import { verifyToken } from './moddlewares/auth.jwt';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  const upload = multer({ storage: storage }).array('files', 10);
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
// Ruta para subir múltiples imágenes
app.post('/upload', verifyToken, (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Error uploading files' });
    }
    
    if(!req.files || Object.keys(req.files).length === 0){
      return res.status(404).json({ message: 'No se ingreso ninguna imagen' })
    }
      return res.status(200).json({ message: 'Files uploaded successfully' });
    
    
  });
});

export default app;
