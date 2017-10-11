# N1-9-2-3-4-
question: Select number from [1~9] to put into  3 subsets (subset2,subset3,subset4) each of length 2,3,4.   Let the sum of numbers in subset2   larger than subset3 ,and subset3 larger than subset4. ex:[8,9] > [4,5,7] > [1,2,3,6]. Now how many the correct answer?


#node N1_9_2_3_4.js

[7,9] > [1,6,8] > [2,3,4,5]

[7,9] > [2,5,8] > [1,3,4,6]

[7,9] > [3,4,8] > [1,2,5,6]

[7,9] > [4,5,6] > [1,2,3,8]

[8,9] > [2,6,7] > [1,3,4,5]

[8,9] > [3,5,7] > [1,2,4,6]

[8,9] > [3,6,7] > [1,2,4,5]

[8,9] > [4,5,6] > [1,2,3,7]

[8,9] > [4,5,7] > [1,2,3,6]
count=9
