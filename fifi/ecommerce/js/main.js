function shoe (name, img, brand, price) {
	this.name = name;
	this.img = img;
	this.brand = brand;
	this.price = price;
}


var sandal1 = new shoe('Ringer', 'http://testn.imgix.net/Zoom/0/_12409860.jpg?fit=fill&bg=FFF&fm=jpg&q=60&trim=color&trimcolor=FFF&trimtol=20&w=380&h=583', 'Steve Madden' ,49.95)

var sandal2 = new shoe('Lola', 'http://testn.imgix.net/Zoom/2/_12426282.jpg?fit=fill&bg=FFF&fm=jpg&q=60&trim=color&trimcolor=FFF&trimtol=20&w=380&h=583' , 'Dolce Vita', 129.95)

var pump1 = new shoe('Martine', 'http://testn.imgix.net/Zoom/7/_12508967.jpg?fit=fill&bg=FFF&fm=jpg&q=60&trim=color&trimcolor=FFF&trimtol=20&w=380&h=583' , 'Halogen', 39.99)

var pump2 = new shoe('Kiara', 'http://testn.imgix.net/Zoom/0/_9627680.jpg?fit=fill&bg=FFF&fm=jpg&q=60&trim=color&trimcolor=FFF&trimtol=20&w=380&h=583' , 'Badgley Mischka', 245.00)

var bootie1 = new shoe('Lavette', 'http://testn.imgix.net/Zoom/10/_11643990.jpg?fit=fill&bg=FFF&fm=jpg&q=60&trim=color&trimcolor=FFF&trimtol=20&w=380&h=583' , 'Vince Camuto', 119.95)

var bootie2 = new shoe('Cors', 'http://testn.imgix.net/Zoom/8/_12802828.jpg?fit=fill&bg=FFF&fm=jpg&q=60&trim=color&trimcolor=FFF&trimtol=20&w=380&h=583' , 'Jeffrey Campbell', 164.95)


var shoeArray = [sandal1, sandal2, pump1, pump2, bootie1, bootie2]

// // locate where to put products
var gallery = document.getElementById('gallery')
var shoeBrand = document.getElementById('shoeBrand')

// create texts
var h4Text = []
var brand = []
var spanPrice= []

for (var i = 0; i < shoeArray.length; i++) {
	h4Text.push(document.createTextNode(shoeArray[i].name))
	brand.push(document.createTextNode(shoeArray[i].brand))
	spanPrice.push(document.createTextNode("$" + shoeArray[i].price))
}

for (var j = 0; j < shoeArray.length; j++) {
	var col4 = document.createElement('div')
	var imgDiv = document.createElement('div')
	var productImg = document.createElement('img')
	var ImgA = document.createElement('a')
	var descriptionDiv = document.createElement('div')
	var overflowH = document.createElement('div')
	var pullLeft = document.createElement('div')
	var titlePrice = document.createElement('h4')
	var productPrice = document.createElement('div')
	var gender = document.createElement('span')
	var titleSpan = document.createElement('span')
	var btn = document.createElement('button')

	var buy2 = document.createTextNode("Buy")

	col4.id = 'shoe' + j
	// col4.className = "col-md-4"
	col4.className = "column"

	// imgDiv.className = "product-img product-img-brd"
	imgDiv.className = "product-img"
	ImgA.setAttribute('href', "#")		
	productImg.setAttribute('src', shoeArray[j].img)


	descriptionDiv.className = "product-description"
	overflowH.className = "overflow-h"
	pullLeft.className = "pull-left"
	titlePrice.className = "title-price"
	productPrice.className = "product-price"
	gender.className = "brand"
	titleSpan.className = "title-price"
	btn.className = "buy"
	btn.setAttribute('type', 'button')


	gallery.appendChild(col4)

	// **************2 divs will go inside col4*******************
	// 1) put img div in col4
	col4.appendChild(imgDiv)
		// put image inside img div
		imgDiv.appendChild(ImgA)
			ImgA.appendChild(productImg)	

	// 2) put description div in col4
		col4.appendChild(descriptionDiv)
			// put overflow div and ul inside description Div
			descriptionDiv.appendChild(overflowH)		
				// put pull-left and product price inside overflow div
				overflowH.appendChild(pullLeft)		
					pullLeft.appendChild(titlePrice)		
						titlePrice.appendChild(h4Text[j])
					pullLeft.appendChild(gender)				
						gender.appendChild(brand[j])			
				overflowH.appendChild(productPrice)				
					productPrice.appendChild(titleSpan)
						titleSpan.appendChild(spanPrice[j])
				overflowH.appendChild(btn)
					btn.appendChild(buy2)
						
}






