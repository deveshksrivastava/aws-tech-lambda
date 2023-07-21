step to setup serverless lambda and aws cloudforms

1. first thing first install serverless framework/package globally or in your project
   Links:https://www.serverless.com/
   2.create node application : npm init
   3.install aws-sdk
   4.type serverless in terminal
   5.choose http APi for now : you can follow from this video url:https://www.youtube.com/watch?v=dMVfqCTzuwk
   6.in serverless.yml you just need to change iamRoleStatement from give video to same as this project serverless.yml since iamRoleStatement is depreciated you can check it by serverless doctor else get notified while (serverless deploy function -f functionName)
   7.create some lambda fuction in yml amd interlink with your fuction as give in code.
   8.now you can deploy witth serverless deploy

some of command of serverless:
1.serverless: helps to create template intially
2.serverless doctor: helps to check any depreciation packages
3.serverless deploy: elp to deploy whole
4.serverless deploy function -f functionName: helps to deploy single fuction
5.serverless config credentials --list : helps to check serverless credential list

some of command for aws-console:
1.aws configure list : show the aws configure credentails
2.aws configure : to configure aws console with access_key and secret_key
3.aws lambda list-functions : show the lambda function
4.aws lambda list-functions --region <your-preferred-region> : show the lambda fuction of specific region
