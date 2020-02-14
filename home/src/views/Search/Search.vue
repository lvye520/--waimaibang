<template>
  <section class="search">
    <HeaderTop title="搜所"></HeaderTop>
    <section class="search-form">
      <form @submit.prevent="search">
        <input type="search" class="search-inp" placeholder="请输入商家名称" v-model="keyWords" />
        <input type="submit" class="search-sub" />
      </form>
    </section>
    <section class="list" v-if="!noSearchShops">
      <ul class="list_container">
        <!-- :to="'/shop?id='+item.id" -->
        <router-link
          :to="{path:'/shop', query:{id:item.id}}"
          tag="li"
          v-for="item in searchShops"
          :key="item.id"
          class="list_li"
        >
          <section class="item_left">
            <img :src="imgBaseUrl + item.image_path" class="restaurant_img" />
          </section>
          <section class="item_right">
            <div class="item_right_text">
              <p>
                <span>{{item.name}}</span>
              </p>
              <p>月售 {{item.month_sales||item.recent_order_num}} 单</p>
              <p>{{item.delivery_fee||item.float_minimum_order_amount}} 元起送 / 距离{{item.distance}}</p>
            </div>
          </section>
        </router-link>
      </ul>
    </section>

    <div class="search_none" v-else>很抱歉！无搜索结果</div>
  </section>
</template>
<style lang="scss" scoped>
.search {
  width: 100%;
  .search-form {
    margin-top: 54px;
    padding: 0px 10px;
    form {
      display: flex;
      .search-inp {
        margin-right: 10px;
        flex: 1;
        height: 35px;
        border: none;
      }
      .search-sub {
        width: 50px;
        background-color: green;
		color: white;
      }
    }
  }
}
</style>
<script>
// 引入组件
import HeaderTop from "../../components/HeaderTop";
// 引入mapState
import { mapState } from "vuex";

// @ is an alias to /src
export default {
  data() {
    return {
      keyWords: "",
      imgBaseUrl: "http://cangdu.org:8001/img/",
      // 定义是否收缩到结果
      noSearchShops: false
    };
  },
  // 注册组件
  components: {
    HeaderTop
  },
  computed: {
    ...mapState(["searchShops"])
  },
  // 发送异步请求，传递keywords，将数据渲染在组件中
  // methods : {
	  // 得到搜索关键字
	//   search(){
		//   const keyWords = this.keyWords.trim();
	  //   // this.$store.dispatch("searchShops", keyWords);
	  //   this.$store.dispatch("searchShops");
	// }

  // },
  methods: {
    search() {
      // 得到搜索关键字
      const keyWords = this.keyWords.trim();
      // 发送异步请求
      if (keyWords) {
        this.$store.dispatch("searchShops");
      }
    }
  },
  // 监听
  watch: {
    searchShops(value) {
      if (!value.length) {
        //没有数据
        this.noSearchShops = true;
      } else {
        this.noSearchShops = false;
      }
    }
  }
};
</script>
