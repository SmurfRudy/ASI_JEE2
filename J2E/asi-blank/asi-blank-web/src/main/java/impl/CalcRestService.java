package impl;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.PathParam;
import javax.ws.rs.QueryParam;

import fr.cpe.rest.ICalcRestService;
import fr.cpe.services.ICalc;

public class CalcRestService implements ICalcRestService {
	
	@Inject
	private ICalc calc;

	public String add(List<Integer> numbers) {
		int sum = calc.add(numbers);
		return Integer.toString(sum);
	}

}
