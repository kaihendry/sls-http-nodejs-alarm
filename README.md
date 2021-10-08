TOPIC=arn:aws:sns:ap-southeast-1:407461997746:alarm-me-NotifyMe
aws sns subscribe \
    --topic-arn $TOPIC \
    --protocol email \
    --notification-endpoint kai.hendry+alarm@gmail.com


