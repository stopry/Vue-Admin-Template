<template>
	 <div class='footer'>
        <p class="beian">鄂ICP备20200402号</p>
    </div>
</template>


<script>
    import { github } from "@/utils/env";

export default {
    name: "footerNav",
	data(){
		return {
            github:github
		}
	},
	methods:{

	}
}
</script>

<style lang="less">
	.footer{
        width: 100%;
        padding: 10px 0;
        font-size:12px;
        text-align: center;
        background: #fff;
        position: fixed;
        bottom: 0;
        z-index: 2;
        p{
            line-height: 30px;
        }
        .intro{
            width: 240px;
            margin: 0 auto;
            justify-content: space-between;
            align-items: center;
        }
    }
</style>


