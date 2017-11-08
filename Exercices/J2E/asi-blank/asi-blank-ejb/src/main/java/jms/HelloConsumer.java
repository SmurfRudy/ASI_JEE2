package jms;

import java.util.logging.Logger;

import javax.ejb.ActivationConfigProperty;
import javax.ejb.MessageDriven;
import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.MessageListener;
import javax.jms.TextMessage;

@MessageDriven(activationConfig = {
		@ActivationConfigProperty(propertyName="destinationType", propertyValue="javax.jms.Queue"),
		@ActivationConfigProperty(propertyName="destination", propertyValue="asi2-hello")
})
public class HelloConsumer implements MessageListener{
	
	Logger logger = Logger.getLogger(HelloConsumer.class.getName());
	
	public void onMessage(Message message) {
		if (message instanceof TextMessage) {
			try {
				String msg = ((TextMessage)message).getText();
				logger.info(msg);
			}catch (JMSException e){
				e.printStackTrace();
			}
		}
	}

}
