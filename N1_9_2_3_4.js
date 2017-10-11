/*
question: 1到9分成3组，4个 3个 2个这样。要求 各组求和要 4〈3〈2。 问有几种分组

author: GuangXiangLi
date:2017.10.10
*/
var s = new Set(['A', 'B', 'C']);  

var src = new Array(10),dst = new Array(10);
var i,i1,i2,i3,i4,i5,i6,i7,i8,i9,count=0;
var res2=new Array(100);res3=new Array(100);res4=new Array(100);result_index=0;
var set2=[];set3=[];set4=[];//new Set();

function clear_src(n){
	for (i=n;i<10;i++)
		src[i]= 0;
}
function check_existed(){
	var existed=0;
	if(!result_index)
		return existed;
	for (i=0;i<result_index;i++){
			if(res2[i]==( dst[1]+dst[2] )  && res3[i]==( dst[3]+dst[4]+dst[5] )  && res4[i]==( dst[6]+dst[7]+dst[8]+dst[9] ) 
				&& (set2[i].has(dst[1]) && set2[i].has(dst[2]))
				&& (set3[i].has(dst[3]) && set3[i].has(dst[4]) && set3[i].has(dst[5]))
				&& (set4[i].has(dst[6]) && set4[i].has(dst[7]) && set4[i].has(dst[8]) && set4[i].has(dst[9]))
				){
				existed = 1;
				return existed;
			}
		}
	return existed;
}
function judge_ok(){
	var ret,added=0;
	ret = ((dst[1]+dst[2]) >(dst[3]+dst[4]+dst[5]))  && ((dst[3]+dst[4]+dst[5]) >(dst[6]+dst[7]+dst[8]+dst[9]));
	if(ret && !check_existed()){
		res2[result_index]   = dst[1]+dst[2];
		res3[result_index]   = dst[3]+dst[4]+dst[5];
		res4[result_index]   = dst[6]+dst[7]+dst[8]+dst[9];
		added = 1;
		set2[result_index] = new Set();
		set3[result_index] = new Set();
		set4[result_index] = new Set();
		set2[result_index].add(dst[1]);set2[result_index].add(dst[2]);
		set3[result_index].add(dst[3]);set3[result_index].add(dst[4]);set3[result_index].add(dst[5]);
		set4[result_index].add(dst[6]);set4[result_index].add(dst[7]);set4[result_index].add(dst[8]);set4[result_index].add(dst[9]); 
		result_index++;
	}

		
	return ret && added;
}
function dump(){
	console.log("[%d,%d] > [%d,%d,%d] > [%d,%d,%d,%d]",dst[1],dst[2],dst[3],dst[4],dst[5],dst[6],dst[7],dst[8],dst[9]);
}
function main(){
	clear_src(1);

	for(i1=1;i1<10;i1++){
		dst[1] = src[i1] = i1;
		for(i2=1;i2<10;i2++){
			if(!src[i2]){
				dst[2] = src[i2] = i2;
				for(i3=1;i3<10;i3++){
					if(!src[i3]){
						dst[3]=src[i3]= i3;
						for(i4=1;i4<10;i4++){
							if(!src[i4]){
								dst[4]=src[i4]=i4;
								for(i5=1;i5<10;i5++){
									if(!src[i5]){
										dst[5]=src[i5]=i5;
										for(i6=1;i6<10;i6++){
											if(!src[i6]){
												dst[6]=src[i6]=i6;
												for(i7=1;i7<10;i7++){
													if(!src[i7]){
														dst[7]=src[i7]=i7;
														for(i8=1;i8<10;i8++){
															if(!src[i8]){
																dst[8]=src[i8]=i8;
																for(i9=1;i9<10;i9++){
																	if(!src[i9]){
																		dst[9]=src[i9]=i9;
																		if(judge_ok()){
																			count ++;	
																			dump();
																		}
																		src[i9] = 0;
																	}
																}
																src[i8] =0;
															}
														}
														src[i7] = 0;
													}
												}
												src[i6] = 0;
											}
										}
										src[i5] = 0;
									}
								}
								src[i4] = 0;
							}
						}
						src[i3] = 0;
					}
				}
				src[i2] = 0;
			}
		}
		src[i1] = 0;
	}

	console.log("count=%d",count);
}

main();

 
