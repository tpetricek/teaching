package demo;

import static org.junit.Assert.*;

import org.junit.Test;

public class CalculatorTest {

	@Test
	public void calculatorCanCalculateAverage() {
		Calculator c = new Calculator();
		c.add(1);
		c.add(2);
		c.add(3);
		assertEquals(c.getAverage(), 2);
	}

	@Test
	public void calculatorCanAddIntegers() {
		Calculator c = new Calculator();
		c.add(1);
		c.add(2);
		c.add(3);
		assertEquals(c.getTotal(), 6);
	}

}
