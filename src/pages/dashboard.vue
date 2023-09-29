<template>
  <div class="w-full h-full">Hello from dashboard</div>
  <div class="px-5">
    <div>
      <button
        class="px-4 py-2 border rounded bg-blue-500 text-white hover:bg-blue-600"
        @click="modelAdd = true"
      >
        Add new post
      </button>
    </div>
    <!-- show card data  -->
    <div class="w-auto flex flex-wrap pt-5 space-x-4">
      <div class="pt-4" v-for="data in posts" :key="data.id">
        <div class="p-5 border rounded w-[300px] shadow">
          <div class="font-bold text-xl test-left border-b">
            {{ data.name }}
          </div>
          <div class="text-left py-2">
            {{ data.description }}
          </div>
          <div class="flex space-x-2 pt-2">
            <button
              class="px-4 py-2 border rounded bg-blue-500 text-white hover:bg-blue-600"
              @click="edit(data.id)"
            >
              Edit
            </button>
            <button
              class="px-4 py-2 border rounded bg-red-500 text-white hover:bg-red-600"
              @click="destory(data.id)"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- show card data  -->

    <!-- pop up modal add new  -->
    <div
      class="flex w-full h-full justify-center item-center"
      v-show="modelAdd"
    >
      <div
        class="w-screen h-full bg-gray-900 bg-opacity-80 top-0 fixed sticky-0 left-0"
        @click="modelAdd = false"
      ></div>
      <div
        class="flex justify-center items-center top-[30%] fixed sticky-0 left-[40%]"
      >
        <div
          class="md:w-auto relative flex flex-col justify-center items-center bg-white p-8"
        >
          <div class="my-5">
            <h1
              role="main"
              class="text-xl font-semibold text-center text-gray-800"
            >
              add new post
            </h1>
          </div>
          <div class="mt-2 flex-col space-y-2">
            <input
              type="text"
              class="py-2 px-1 border-2 w-full text-gray-800 text-base leading-4 text-left mt-2 focus:outline-2"
              placeholder="Title"
              v-model="data.name"
            />
            <textarea
              class="border-2 py-2 px-1 w-full text-gray-800 text-base leading-4 text-left mt-2 focus:outline-2"
              cols="30"
              rows="8"
              placeholder="Description"
              v-model="data.description"
            />
          </div>
          <button
            class="mt-2 px-4 py-2 border rounded bg-gray-500 text-white hover:bg-gray-400"
            @click="addnew"
          >
            Create
          </button>
        </div>
      </div>
    </div>
    <!-- pop up modal add new  -->

    <!-- pop up modal add update  -->
    <div
      class="flex w-full h-full justify-center item-center"
      v-show="modelUpdate"
    >
      <!-- background  -->
      <div
        class="w-screen h-full bg-gray-900 bg-opacity-80 top-0 fixed sticky-0 left-0"
        @click="modelUpdate = false"
      ></div>
      <div
        class="flex justify-center items-center top-[30%] fixed sticky-0 left-[40%]"
      >
        <div
          class="md:w-auto relative flex flex-col justify-center items-center bg-white p-8"
        >
          <div class="my-5">
            <h1
              role="main"
              class="text-xl font-semibold text-center text-gray-800"
            >
              Update post
            </h1>
          </div>
          <div class="mt-2 flex-col space-y-2">
            <input
              type="text"
              class="py-2 px-1 border-2 w-full text-gray-800 text-base leading-4 text-left mt-2 focus:outline-2"
              placeholder="Title"
              v-model="data.name"
            />
            <textarea
              class="border-2 py-2 px-1 w-full text-gray-800 text-base leading-4 text-left mt-2 focus:outline-2"
              cols="30"
              rows="8"
              placeholder="Description"
              v-model="data.description"
            />
          </div>
          <button
            class="mt-2 px-4 py-2 border rounded bg-gray-500 text-white hover:bg-gray-400"
            @click="updatePost"
          >
            Update
          </button>
        </div>
      </div>
    </div>
    <!-- pop up modal add update  -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      modelAdd: false,
      modelUpdate: false,
      data: {
        id: "",
        name: "",
        description: "",
      },
    };
  },
  computed: {
    ...mapGetters({
      posts: "post/posts",
    }),
  },
  methods: {
    addnew() {
      this.$store.dispatch("post/ADD_NEW", this.data).then((respone) => {
        if (respone) {
          this.modelAdd = false;
          //reset data
          this.data = {
            id: "",
            name: "",
            description: "",
          };
        }
      });
    },
    edit(id) {
      this.modelUpdate = true;
      this.$store.dispatch("post/GET_POST", id).then((respone) => {
        //set data model
        this.data.id = respone[0].id;
        this.data.name = respone[0].name;
        this.data.description = respone[0].description;
      });
    },
    updatePost() {
      this.$store.dispatch("post/UPDATE_POST", this.data).then((respone) => {
        if (respone) {
          this.modelUpdate = false;
        }
      });
    },
    destory(id) {
      this.$store.dispatch("post/DELETE_POST", id).then((respone) => {
        if (respone) {
          alert("Xóa Là xóa hẳn, éo hủy đâu");
        }
      });
    },
  },
};
</script>
<style></style>
