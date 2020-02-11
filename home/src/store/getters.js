export default {
	//定义计算属性
	totalCount (state) {
		return state.cartFoods.reduce((preTotal, food) => preTotal + food.count , 0)
		// return 2
	},

	totalPrice (state) {
		return state.cartFoods.reduce((preTotal, food) => preTotal + food.count * food.price, 0)
	},
}