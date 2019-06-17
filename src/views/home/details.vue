<template>
	<div>
		详情页
		<el-button type="primary" size="mini" icon="el-icon-delete" @click="handleBack">返回</el-button>
		<hr>
		<grid-container :cols="[8,4,4,8]">
			<template #col1>33333</template>
			<template #col2>444</template>
			<template #col3>555</template>
			<template #col4>777</template>
		</grid-container>
		<grid-container :cols="[12,12]">
			<template #col1>33333</template>
			<template #col2>444</template>
			<!-- <template #col3>555</template> -->
		</grid-container>

		<h4>表单</h4>
		<el-form label-position="left" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<grid-container :cols="[4,4,8,8]">
				<template #col3>
					<el-form-item label="活动名称-年龄" prop="age">
				    <el-input v-model.int="ruleForm.age" size="small"></el-input>
				  </el-form-item>
				</template>
				<template #col4>
					<el-form-item label="活动名称" prop="name">
				    <el-input v-model="ruleForm.name" size="small"></el-input>
				  </el-form-item>
				</template>
			</grid-container>
			<grid-container :cols="[12,12]">
				<template #col1>
					<el-form-item label="活动名称" prop="name">
				    <el-input v-model="ruleForm.name" size="small"></el-input>
				  </el-form-item>
				</template>
				<template #col2>
					<el-form-item label="活动名称" prop="name">
				    <el-input v-model="ruleForm.name" size="small"></el-input>
				  </el-form-item>
				</template>
			</grid-container>
			<grid-container>
				<template #col1>
					<el-form-item label="活动名称" prop="name">
				    <el-input v-model="ruleForm.name" size="small"></el-input>
				  </el-form-item>
				</template>
				<template #col2>
					<el-form-item label="活动名称" prop="name">
				    <el-input v-model="ruleForm.name" size="small"></el-input>
				  </el-form-item>
				</template>
				<template #col3>
					<el-form-item label="活动名称" prop="name">
				    <el-input v-model="ruleForm.name" size="small"></el-input>
				  </el-form-item>
				</template>
			</grid-container>


		  <el-form-item>
		    <el-button type="primary" @click="submitForm('ruleForm')" size="small">立即创建</el-button>
		    <el-button @click="resetForm('ruleForm')" size="small">重置</el-button>
		  </el-form-item>
		</el-form>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				ruleForm:{
					name:'',
					age:0
				},
				rules:{
					name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },

          ],
					age: [
						{ trigger: 'change', validator:(rule, value, callback)=>{
								let flag = util.IsInt(event.data,value,event);
								if (!flag) {
									this.ruleForm.age = null;
									return callback(new Error('输入数字'));
								}
								else callback();
							}
						}
					]
				}
			}
		},
		methods: {
			submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
			handleBack() {
				this.$router.go(-1);
			},

			handleKeyDown() {
				console.log(event.keycode)
			}
		}
	}
</script>
