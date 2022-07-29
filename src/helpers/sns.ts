import AWS, { SNS } from "aws-sdk";

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY_ACCESS,
});

const sns = new SNS({ region: process.env.AWS_SNS_REGION });
sns.setSMSAttributes({
  attributes: {
    DefaultSMSType: "Transactional", // Promotional || Transactional
  },
});

export type SendSMSInput = {
  PhoneNumber: string;
  Message: string;
};

export async function sendSMS({ PhoneNumber, Message }: SendSMSInput) {
  const config = {
    PhoneNumber,
    Message,
  };

  try {
    const smsResponse = await sns.publish(config).promise();
    return smsResponse;
  } catch (error) {
    throw new Error("Send SMS error");
  }
}
