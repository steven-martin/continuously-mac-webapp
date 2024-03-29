import { waitForAsync } from '@angular/core/testing';
import { TimeAgoPipe } from './time-ago.pipe';

describe('TimeAgoPipe', () => {
  let pipe: TimeAgoPipe;

  beforeEach(waitForAsync(() => {
    pipe = new TimeAgoPipe();
  }));

  it('providing date of less than 20 seconds old expecting message of Just Now.', waitForAsync(() => {
    // Arrange
    const baseTime = new Date();

    // Act, Assert
    expect(pipe.transform(baseTime.toISOString())).toBe('Just Now.');
  }));

  it('providing date of 70 seconds old returns correct message in seconds', waitForAsync(() => {
    // Arrange
    const baseTime = new Date();
    baseTime.setSeconds(baseTime.getSeconds() - 70);

    // Act, Assert
    expect(pipe.transform(baseTime.toISOString())).toBe(
      'Posted about 70 seconds ago.'
    );
  }));

  it('providing date of 3 minutes old returns correct message in minutes', waitForAsync(() => {
    // Arrange
    const baseTime = new Date();
    baseTime.setMinutes(baseTime.getMinutes() - 3);

    // Act, Assert
    expect(pipe.transform(baseTime.toISOString())).toBe(
      'Posted about 3 minutes ago.'
    );
  }));

  it('providing date of 3 hours old returns correct message in hours', waitForAsync(() => {
    // Arrange
    const baseTime = new Date();
    baseTime.setHours(baseTime.getHours() - 3);

    // Act, Assert
    expect(pipe.transform(baseTime.toISOString())).toBe(
      'Posted about 3 hours ago.'
    );
  }));

  it('providing date of 3 day old returns correct message in days', waitForAsync(() => {
    // Arrange
    const baseTime = new Date();
    baseTime.setDate(baseTime.getDate() - 3);

    // Act, Assert
    expect(pipe.transform(baseTime.toISOString())).toBe(
      'Posted about 3 days ago.'
    );
  }));
});
