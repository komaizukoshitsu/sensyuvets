import CMS from 'netlify-cms-app'
//import uploadcare from 'netlify-cms-media-library-uploadcare'
//import cloudinary from 'netlify-cms-media-library-cloudinary'

//import AboutPagePreview from './preview-templates/AboutPagePreview'
//import BlogPostPreview from './preview-templates/BlogPostPreview'
//import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPreview from './preview-templates/index'

//CMS.registerMediaLibrary(uploadcare);
//CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPreview)
//CMS.registerPreviewTemplate('about', AboutPagePreview)
//CMS.registerPreviewTemplate('products', ProductPagePreview)
//CMS.registerPreviewTemplate('blog', BlogPostPreview)