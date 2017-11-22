package fr.cpe.ejb;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.jms.JMSConsumer;
import javax.jms.JMSContext;
import javax.jms.JMSException;
import javax.jms.ObjectMessage;
import javax.jms.Queue;
import javax.annotation.Resource;
import fr.cpe.model.User;



@Stateless
@LocalBean
public class MessageReceiverSync implements MessageReceiverSyncLocal {
 
	@Inject
	JMSContext context;
	
	@Resource(mappedName = "java:/jms/watcherAuthJMS") 
	private Queue queue;


	public User receiveMessage() throws JMSException {
		JMSConsumer consumer =context.createConsumer(queue);
		ObjectMessage message = (ObjectMessage) consumer.receive(1000);
		User user;
		try {
			user = (User) message.getObject();
			return user;
		} catch (JMSException e) {
			e.printStackTrace();
			throw e;
		}
	
		
	}
}
 