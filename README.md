# AWS Sam Lambda API Example

This project is an example weather forecast API created to provide a simple 
example of how to use the AWS [Serverless Application Model]. 

The project uses the [Sam CLI] to build and deploy a Lambda based API with AWS [CloudFormation].

City names are translated into coordinates using the [MapQuest Open Geocoding] API. 
Coordinates are used with the [DarkSky] API to retrieve weather information.

[Serverless Application Model]:https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html
[Sam CLI]:https://github.com/awslabs/aws-sam-cli
[MapQuest Open Geocoding]:https://developer.mapquest.com/documentation/open/geocoding-api/
[DarkSky]:https://darksky.net/
[CloudFormation]:https://docs.aws.amazon.com/cloudformation/index.html