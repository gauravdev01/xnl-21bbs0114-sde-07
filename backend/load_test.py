from locust import HttpUser, task, between


class MetricsUser(HttpUser):
    wait_time = between(1, 3)  # Simulate users waiting 1-3 seconds between requests

    @task
    def get_metrics(self):
        self.client.get("/metrics")
