package fr.cpe.ejb;

import javax.jms.JMSException;

import fr.cpe.model.User;

public interface MessageReceiverSyncLocal {
	User receiveMessage() throws JMSException;
}
