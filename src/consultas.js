/* CONSULTAS*/

db.inventory.find( { status: "D" } )   /*Esta consulta mostrará todos los documentos de inventory
cuyo "status" sea igual a D */

db.inventory.find( { status: { $in: [ "A", "D" ] } } )   /* Esta consulta mostrará todos los 
documentos de inventory cuyo "status" sea A o D */

db.inventory.find( { status: "A", qty: { $lt: 30 } } )   /* Esta consulta mostrará todos los 
documentos de inventory cuyo "status" sea A y "qty" menor que 30*/

db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } )   /* Esta consulta mostrará
todos los documentos de inventory cuyo "status" sea A o "qty" menor que 30*/

db.inventory.find( { status: "A", $or: [ { qty: { $lt: 30 } }, { item: /^p/ } ]} )     /* Esta consulta 
mostrará todos los documentos de inventory cuyo "status" sea A y que además su "qty" sea menor que 30
o "item" empiece por la letra p */

db.inventory.find( { qty: { $lt:100} })   /* Esta consulta mostrará todos los documentos de inventory
cuyo "qty" es menor que 100*/

db.inventory.find( {$and: [{ qty: {$ne: 12}}, {status: "X"}]}) /* Esta consulta mostrará todos los
documentos de inventory cuyo status sea X y su cantidad no sea 12 */

db.inventory.find( {$and: [ { $or: [ { qty: { $lt : 1 } }, { qty : { $gt: 150 } } ] }, ]} )   /* Esta
consulta mostrará todos los documentos cuyos "qty" sean menor que 1 o mayor que 150 */

db.inventory.find({ status: {$not: {"$eq": "X"}}}) /* Esta consulta mostrará todos los documentos cuyos 
"status" no sea igual que X */