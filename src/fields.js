const normalize=key=>key.toLocaleUpperCase('tr').replace(/İ/g,'I').replace(/\s+/g,' ').trim();
const rank=key=>{const k=normalize(key);if(/^(ARAMA KELIMELERI|ANAHTAR KELIMELER)/.test(k))return 0;if(/FIYAT/.test(k))return 1;if(/AÇIKLAMA/.test(k)&&!/META|SEO/.test(k))return 3;if(/SEO|META/.test(k))return 4;if(/^EK BILGI/.test(k))return 5;return 6;};
export function orderFields(fields,sku){
 const excluded=key=>{const k=normalize(key);return /^(KATEGORI[ _-]*ID|BARKOD|STOK MIKTARI|SATIŞ FIYATI)(?:\b|\s|$)/.test(k)||['ÜRÜN ADI','ÜRÜN KODU','SKU','TEDARIKÇI ÜRÜN KODU (SKU)'].includes(k);};
 const result=fields.filter(f=>!excluded(f.key)).map((f,index)=>({...f,index,rank:rank(f.key)}));
 result.push({key:'SKU',value:sku,index:-1,rank:2});
 return result.sort((a,b)=>a.rank-b.rank||a.index-b.index).map(({key,value})=>({key,value}));
}
